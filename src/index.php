<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/brands.min.css"
      integrity="sha512-9YHSK59/rjvhtDcY/b+4rdnl0V4LPDWdkKceBl8ZLF5TB6745ml1AfluEU6dFWqwDw9lPvnauxFgpKvJqp7jiQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <title>Document</title>
    <link rel="stylesheet" href="./CSS/style1.css "></link>
    <style>


    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <h1>Daily Expense Manager</h1>
      </header>
      <div>
        <button class="catageory" id="exp">Expense</button>
        <button class="catageory" id="inc">Income</button>
      </div>
      <article id="expense_detail">
        <hr />
        <input type="number" placeholder="Enter Expense" id="expense_amt" />
        <select name="" id="expense_type">
          <option disabled>Select Any one</option>
          <option value="Grocery">Grocery</option>
          <option value="Veggies">Veggies</option>
          <option value="Travelling">Travelling</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        <input type="button" value="Add" id="expense_add" />
        <input type="button" value="Update" id="update" /><br />
        <span class="msg"></span>
        <hr />
      </article>
      <article id="income_detail">
        <hr />
        <input type="number" placeholder="Enter Income" id="income_amt" />
        <input type="button" value="Add" id="income_add" />
        <input type="button" value="Update" id="update" class="update_inc" />
        <br />
        <span class="msg"></span>
        <hr />
      </article>
      <article id="full_detail">
        <label for="">Total Expense</label>
        <br />
        <input type="text" disabled id="total_expense" />
        <br />
        <label for="">Total Income</label>
        <br />
        <input type="text" disabled id="total_income" />
        <br />
        <label for="">Remaining</label>
        <br />
        <input type="text" disabled id="remaining" />
        <hr />
      </article>
      <table id="record_table">
        <thead>
          <tr>
            <th>Grocery</th>
            <th>Veggies</th>
            <th>Travelling</th>
            <th>Miscellaneous</th>
          </tr>
        </thead>
        <tbody class="tbody"></tbody>
      
      </table>
      <hr>
      <ul id="txns"></ul>
    </div>
  </body>
  <script src="./JS/script1.js"></script>
</html>
