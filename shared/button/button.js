const Button = (text, URL) => {

    return (`
        <div class="button-black">
            <a href="${URL}"><button>${text}</button></a>
        </div>
`)
}

export default Button;