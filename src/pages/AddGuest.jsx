import { useState } from 'react'; 

export default function AddGuest () {
    const newGuest = ({}) => {
        const [firstName, setFirstName] = useState()
        const [lastName, setLastName] = useState()
        const [email, setEmail] = useState()
        const [phone, setPhone] = useState();
        const [codeFiscal, setCodeFiscal] = useState();

        const handleSubmit = (e) => {
            e.preventDefault();

        }
    }

}