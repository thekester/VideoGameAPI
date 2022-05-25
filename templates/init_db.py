import json
import sqlite3

conn = sqlite3.connect('database.db')
newegg_json = json.load(open('jeux.json'))

columns = []
column = []
for data in newegg_json:
    column = list(data.keys())
    for col in column:
        if col not in columns:
            columns.append(col)

value = []
values = []
for data in newegg_json:
    for i in columns:
        value.append(str(dict(data).get(i)))
    values.append(list(value))
    value.clear()

create_query = 'create table if not exists video_games (id,name,type,release_date,release_year,description,pegi,devices)'
insert_query = 'insert into video_games values (?,?,?,?,?,?,?,?)'
c = conn.cursor()
c.execute(create_query)
c.executemany(insert_query, values)
conn.commit()
c.close()