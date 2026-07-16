import { TableWrapper } from "./styles"

export const Table = () => {
  return (
    <TableWrapper>
        <thead>
          <tr>
            <td>Coluna 01</td>
            <td>Coluna 02</td>
            <td>Coluna 03</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Col 01</td>
            <td>Col 02</td>
            <td>Col 03</td>
          </tr>
          <tr>
            <td>Col 01</td>
            <td>Col 02</td>
            <td>Col 03</td>
          </tr>
        </tbody>
    </TableWrapper>
  )
}