import Counter from "../components/countSrvcs/Counter";
import CountServices from "../components/countSrvcs/CountServices";
import Display from "../components/countSrvcs/Display";

export default function Serviços() {
    return(
        <>
        <h1>Serviços Veterinários</h1>
        <CountServices />
        <hr/>
        <h2>Contador de exemplo usando ContextAPI</h2>
        <Display/>
        <Counter/>
        </>
    );
}