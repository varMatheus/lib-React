import React from 'react';
import { AbGrupoDeOpcoes, AbGrupoOpcao, AbGrupoOpcoesProps } from '../src';
import { ComponentMeta, ComponentStory } from "@storybook/react"

export default {
  title: 'Componentes/AbGrupoDeOpcoes',
  component: AbGrupoDeOpcoes
} as ComponentMeta<typeof AbGrupoDeOpcoes>

const Template: ComponentStory<typeof AbGrupoDeOpcoes> = (args) => <AbGrupoDeOpcoes {...args}/>;

export const Padrao = Template.bind({});

Padrao.args = {
  opcoes: [
    {
      id: 1,
      title: 'E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob'
    },
    {
      id: 2,
      title: 'Impresso',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob'
    },
    {
      id: 3,
      title: 'Impresso + E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob'
    }
  ]
} as AbGrupoOpcoesProps