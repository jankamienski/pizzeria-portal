# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj
  

# Logowanie

- `/login`
  - pola na login i hasło
  guzik do zalogowania (link do dashboardu)

# Widok ostępności stolików

`/tables`
- wybor daty i godziny
- tabela z lista rezerwacji oraz wydarzen
  - kazda kolumna jest jednym stolikiem
  - kazdy wiersz to 30min
  - ma przypominac widok tygodnia w kalendarzu google, gdzie w kolumnach zamiast dni sa rozne stoliki
  - po kliknieciu rezerwacji lub eventu, przechodzimy na strone szczegolow
`/tables/booking/:id`
  - zawierac wszystkie informacje dotyczace rezerwacji
  - umowzliwiac edycje i zapisanie zmian
`/tables/booking/new`
  -analogicznie do poprzedniej, bez poczatkowych informacji
`/tables/events/:id`
 - analogicznie do powyższej, dla eventów


  - zawierac wszystkie informacje dotyczace rezerwacji
  - umowzliwiac edycje i zapisanie zmian


`/tables/events/new`
  - analogicznie do poprzedniej, dla eventó,  bez poczatkowych informacji

# Widok kelnera

- `/waiter`
  - w wierszach stoliki
  - w kolumnach rozne rodzaje informacji (status, czas od ostatniej aktywnosci)
  - w ostatniej kolumnie dostepne akcje dla danego stolika
- `/waiter/order/new`
  - numer stooika (edytowalny)
  - menu produktow
  - opcje wybranego produktu
  - zamowienia (zamowione produktu z opcjami i cena)
  - kwota zamowienia

  - wyswietl liste zamowien w kolejnosci ich zlozenia
  - lista musi zawierac numer stolika lub zamowienia zdalnego oraz
  - pelne informacje dotyczace zamowionych dan
  - na liscie musi byc mozliwosc oznaczenia zamowienia jako zrezalizowane- numer stolika (edytowalny)
  - menu produktow
  - opcje wybranego produktu
  - zamowienia (zamowione produktu z opcjami i cena)
  - kwota zamowienia

- `/waiter/order/:id`
   - jak powyzej z wprowadzona poprzednio informacja

# Widok kuchni

- `/kitchen`
  - wyswietl liste zamowien w kolejnosci ich zlozenia
  - lista musi zawierac 
    - numer stolika (lub zamowienia zdalnego)
    - pelne informacje dotyczace zamowionych dan
  - na liscie musi byc mozliwosc oznaczenia zamowienia jako zrezalizowane