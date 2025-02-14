# WeatherForecastAPI

##Tecnologias Utilizadas
•	Linguagem: Python
•	Framework: Django Rest Framework
•	Serviços de Terceiros: Open-meteo e Nominatim
##Instalação
•	Clone este repositório: 
o	git clone https://github.com/BlackPearlBP/WeatherForecastAPI.git
•	Navegue até o diretório do projeto: 
o	cd WeatherForecastAPI.
•	Crie um ambiente virtual e ative-o:
o	python -m venv venv
	Para ativar o ambiente no Linux:
o	source venv/bin/activate
	Para ativar o ambiente em Windows:  
o	venv\Scripts\activate 
•	Instale as dependências do backend:
o	pip install -r requirements.txt
•	Aplique as migrações do banco de dados:
o	python manage.py migrate
•	Execute o servidor de desenvolvimento:
o	python manage.py runserver
•	Instale as dependências do frontend:
o	cd frontend
o	npm install
o	npm run dev

	
##Uso
•	Acesse o software:
o	http://localhost:5173/
##Endpoints
•	http://127.0.0.1:8000/api/forecast/?city=São Paulo&country=Brazil&type=daily
##Contribuição
1.	Faça um fork do repositório.
2.	Crie uma branch para sua feature ou correção de bug.
3.	Envie um Pull Request para análise.
##Contato
Caso tenha dúvidas ou sugestões, entre em contato pelo GitHub Issues.
