export default function Login() {
    return `
        <h1 style="text-align: center;">Sign in to your account</h1>
               <div class="reg-form" style="margin-top: 75px;">
        <form class="register-form" style="margin-bottom: 50px">
                <div class="form-group">
                    <input type="text" class="form-control" id="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <button type="submit" class="myButton btn btn-dark" id="login-btn">Login</button>
            </form>
            <p style="text-align: center; margin-bottom: 200px">Don't have an account?<a> Sign up</a></p>
    </div>
    `;
}