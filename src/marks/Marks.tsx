
type MarksProps = {
  role: string;
  email: string
};

function Marks({role, email}: MarksProps) {

    return (
        <>
            {
                (role == 'ADMIN') ? <div>I am Adim</div> :  <div>I am Normal User</div>
            }
            <div>Email is {email} </div>

        </>
    )
}

export default Marks;