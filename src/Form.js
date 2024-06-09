const Form = (reqType, setreqType) => {
  return (
    <form 
        onSubmit={(e) => {
            e.preventDefault();
            setreqType(e.target.reqType.value);
        }}
    >

    </form>
  )
}

export default Form
