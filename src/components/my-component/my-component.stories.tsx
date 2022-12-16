export default{
    title:'Sample/My Component'
}
interface Args{
    first:string;
    middle:string;
    last:string;
}
const Template = (args:Args)=> `<my-component first="${args.first}" last="${args.last}" middle="${args.middle}"></my-component>`
export const myComponent = Template.bind({});
myComponent.args={
    first:'firstname',
    middle:'middlename',
    last:'lastname'
}
