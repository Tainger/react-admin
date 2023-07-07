



function JSMyButton() {

    // 获取按钮元素
    const button = document.getElementById('myButton');

    // 定义一个变量来追踪按钮是否处于聚焦状态
    let isFocused = false;

    // 添加事件处理程序来更新状态变量
    button.addEventListener('focus', () => {
        isFocused = true;
        // 在按钮聚焦时执行的逻辑
        console.log('按钮已聚焦');
    });

    button.addEventListener('blur', () => {
        isFocused = false;
        // 在按钮失去焦点时执行的逻辑
        console.log('按钮失去焦点');
    });

    return (
        <div>

          <button id="myButton">


          </button>

        </div>
    )
}

export default JSMyButton