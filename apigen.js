const fs = require('fs')
const path = require('path')
const parse = require('swagger-parser')
const swaggerUrl = 'http://localhost:8082/flowsHub/v2/api-docs'
// api接口方法存放目录
const API_PATH = path.resolve(__dirname, './src/api')

// 判断目录是否存在
const isExist = (lastPath = '') => {
    const privatePath = `${lastPath ? API_PATH + '/' + lastPath : API_PATH}`
    const stat = fs.existsSync(privatePath)
    if (!stat) {
        fs.mkdirSync(privatePath)
    }
    if (!lastPath) {
        const configPath = `${API_PATH}/config.jsx`
        // api 目录下写入 config文件
        fs.access(configPath, function (err) {
            if (err && err.code === 'ENOENT') {
                fs.writeFileSync(`${API_PATH}/config.jsx`, 'export const ip = \'https://test.××××.com/\'')
            }
        })
    }
}

// 整理出相同模块路径
const getModules = (map) => {
    map.forEach((value, key) => {
        writeFileApi(key, value)
    })
}

// 写入jsx
const writeFileApi = (fileName, apiData) => {
    // api.jsx
    let tplApi = 'import { ip } from \'../config\' \n\nexport default {\n'
    // index.jsx
    let tplIndex = 'import { post, get, put, delete } from \'../../utils/request\'\nimport api from \'./api\'\n\n'

    const apiDataLen = apiData.length
    for (let i = 0; i < apiDataLen; i++) {
        const item = apiData[i]
        const itemKeys = Object.keys(item)	// 请求方法
        const itemTagKey = itemKeys[0]	// 方法数据信息
        const itemKeysFirest = item[itemTagKey]
        const pathName = itemKeysFirest.operationId
        const allPath = item.allPath
        tplApi = `${tplApi}   ${pathName}: \`\${ip}${allPath}\`,\n`
        tplIndex = `${tplIndex}\n//${itemKeysFirest.summary}\n` +
            `export const ${pathName} = (params) => {\n` +
            `	return ${itemTagKey}(api.${pathName}, params)\n}`
    }
    tplApi = tplApi + '\n}'
    fs.writeFileSync(`${API_PATH}/${fileName}/api.jsx`, tplApi)
    fs.writeFileSync(`${API_PATH}/${fileName}/index.jsx`, tplIndex)
}

// 入口方法
const apigen = async () => {
    isExist()
    try {
        const parsed = await parse.parse(swaggerUrl)
        const paths = parsed.paths
        const pathsKeys = Object.keys(paths)	// 获取url路径
        const pathsKeysLen = pathsKeys.length
        const modulesMap = new Map()
        for (let i = 0; i < pathsKeysLen; i++) {
            const item = pathsKeys[i]
            const itemAry = item.split('/')
            const pathsItem = paths[item]
            let fileName = itemAry[3]
            if (!fileName) continue
            fileName = fileName.toLowerCase()
            // 创建模块目录
            isExist(fileName)
            // 完整路径
            pathsItem.allPath = item
            if (modulesMap.has(fileName)) {
                const fileNameAry = modulesMap.get(fileName)
                fileNameAry.push(pathsItem)
                modulesMap.set(fileName, fileNameAry)
            } else {
                modulesMap.set(fileName, [pathsItem])
            }
        }
        getModules(modulesMap)
    } catch (e) {
        console.log(e)
    }
}

apigen()

