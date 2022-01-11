import { useEffect } from 'react'
import { api } from '../../services/api'
import * as S from './styles'

export function Transactions () {
  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className='deposit'>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$1.100</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>

        </tbody>
      </table>
    </S.Container>
  )
}
