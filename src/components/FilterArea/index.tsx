import './styles.css'

const FilterArea = () => {
  return (
    <div className="filter-area">

      <input type="search" placeholder="Pesquise pelo título" />

      <select name="status">
        <option value="valor1" selected disabled>Status</option>
        <option value="valor1">Solicitando</option>
        <option value="valor2" selected>Processada</option>
        <option value="valor3">Concluida</option>
      </select>
    </div>
  )
}

export default FilterArea;