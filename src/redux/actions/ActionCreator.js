
export const action = (actionType,actionDescription) => {
    return(
        {
            type: actionType,
            description: actionDescription
        }
    )
}