import Button from './html/Button'
import Input from './html/Input'
// import CheckBox from './html/CheckBox'

const App = () => {
  return (
    <>
      <div className='item-middle flex-col gap-4'>
        <Button type='button' className='bg-[#4f4f4f]' name='add-btn' disabled={false}>Add</Button>
        <Button type='button' className='bg-[#e13333]' name='cancel-btn' disabled={false}>Cancel</Button>
        <Button type='button' className='bg-[#8d196c]' name='success-btn' disabled={false}>Success</Button>

        <Input type='text' placeholder='Enter your name'/>
        <Input type='password' placeholder='Enter your name'/>
        <Input type='number' placeholder='Enter your name'/>
      </div>  
    </>
  )
}
export default App;