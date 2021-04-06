import { useState } from 'react'
import * as S from './styles'

import Input from 'components/Input'
import TextArea from 'components/TextArea'
import Button from 'components/Button'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const payload = {
      name,
      email,
      message
    }

    // enviar um post para /forgot-password pedindo um email
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    await response.json()

    alert('Message sent')
  }

  return (
    <S.Wrapper>
      <S.Column>
        <form>
          <Input name="name" label="Name" onInputChange={setName}></Input>
          <Input name="email" label="Email" onInputChange={setEmail}></Input>
          <TextArea
            name="message"
            label="Message"
            onInputChange={setMessage}
          ></TextArea>
          <Button type="button" color="dark" onClick={handleSubmit} fullWidth>
            Enviar
          </Button>
        </form>
      </S.Column>
      <S.Column></S.Column>
    </S.Wrapper>
  )
}

export default Contact
