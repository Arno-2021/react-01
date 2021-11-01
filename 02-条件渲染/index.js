import ReactDOM from 'react-dom'
const isLogin = true
const logining = () => {
    if (isLogin) {
        return <h1>尊敬的用户您好</h1>
    } else {
        return <h1>您还没登陆</h1>
    }
}
ReactDOM.render(logining(), document.querySelector('#root'))
