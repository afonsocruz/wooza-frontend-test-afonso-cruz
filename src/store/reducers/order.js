//Set INITIAL_STATE

const INITIAL_STATE = {
  orderInitialized: false,
  data: {
    platform: {
      sku: null,
      nome: '',
    },
    plan: {
      sku: '',
      nome: '',
    },
    clientData: {
      nome: '',
      email: '',
      cpf: '',
      nascimento: '',
      telefone: '',
    },
  },
};

function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'UPDATE_PLATFORM':
      return {
        ...state,
        orderInitialized: true,
        data: {
          ...state.data,
          platform: { sku: action.payload.sku, nome: action.payload.nome },
        },
      };
    case 'UPDATE_PLAN':
      return {
        ...state,
        data: {
          ...state.data,
          plan: {
            sku: action.payload.planSku,
            franquia: action.payload.franquia,
            valor: action.payload.valor,
            aparelho: action.payload.aparelho,
          },
        },
      };
    case 'UPDATE_CLIENT_DATA':
      return {
        ...state,
        data: {
          ...state.data,
          clientData: action.payload.client,
        },
      };
    default:
      return state;
  }
}

export default order;
