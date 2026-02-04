fetch("https://api.escuelajs.co/api/v1/products")
  .then(res => res.json())
  .then(data => renderProducts(data));

function renderProducts(products) {
  const tbody = document.getElementById("product-table");
  tbody.innerHTML = "";

  products.forEach(item => {
    tbody.innerHTML += `
      <tr title="${item.description}">
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>$${item.price}</td>
        <td>${item.category?.name}</td>
        <td>
          <img src="${item.images[0]}" class="product-img"/>
        </td>
      </tr>
    `;
  });
}
