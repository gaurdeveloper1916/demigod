import Header from "../component/common/header/Header";

const { default: Content } = require("../component/onboarding/Content")

const Signin=()=>{
    return (
        <>
                <Header/>
                <Content />
        </>
    )
}
export default Signin;