export interface Props {
    code: string, 
    description: string
}

export default function({code, description}: Props){
    return (<div>
        codigo: {code}<br />
        descrição: {description}
    </div>)
}