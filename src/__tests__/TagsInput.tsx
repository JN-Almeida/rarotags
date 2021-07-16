import React from 'react'
import TagsInput from '@/TagsInput'
import { cleanup, render } from '@testing-library/react'

describe('TagsInput Component', () => {
  afterEach(jest.clearAllMocks)
  afterEach(cleanup)

  it('cria o snapshot do component', () => {
    const container = render(<TagsInput />)
    expect(container.asFragment()).toMatchSnapshot()
  })

  it('deve renderizar as tags enviadas por atributos', () => {
    const emails = ['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br']

    const { debug } = render(<TagsInput tags={emails} />)

    debug()
  })

  it('deve renderizar tags quando preencher o input e pressionar enter', () => {
    // teste não implementado.
  })

  it('deve renderizar tags quando preencher o input e pressionar tab', () => {
    // teste não implementado.
  })

  it('deve deletar a útima tag criada ao pressionar o botão de backspace', async () => {
    // teste não implementado.
  })
})
