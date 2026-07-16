import { LuSearch } from "react-icons/lu"
import { PageDescription, PageHeader } from "../../components/Styles"
import { Input } from "../../components/ui/Input"
import { UsersPageWrapper } from "./styles"
import { Table } from "../../components/Table"

export const UsersPage = () => {
  return (
    <UsersPageWrapper>
      <header>
        <section>
          <PageHeader>Usuários</PageHeader>
          <PageDescription>Listagem dos usuários cadastrados</PageDescription>
        </section>
        <section>
          <Input StartIcon={LuSearch} placeholder="Pesquisar ..." />
        </section>
      </header>

      <main>
        <Table />
      </main>
    </UsersPageWrapper>
  )
}