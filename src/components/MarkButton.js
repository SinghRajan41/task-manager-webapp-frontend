function MarkButton(props)
{
    if(props.marked === false) {
        return (
            <div>
                mark as done
            </div>
        )
    }
    else {
        return (
            <div>
                mark as undone
            </div>
        )
    }
}

export default MarkButton;