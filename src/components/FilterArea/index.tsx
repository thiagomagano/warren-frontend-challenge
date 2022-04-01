import './styles.css'

const FilterArea = () => {
  return (
    <div className="filter-area">

      <input type="search" placeholder="Pesquise pelo título" />

      <select name="status" defaultValue="status">
        <option value="status" disabled>Status</option>
        <option value="created">Solicitando</option>
        <option value="processed">Processada</option>
        <option value="processed">Concluida</option>
      </select>
    </div>
  )
}

export default FilterArea;