# WeatherForecastAPI

## Tecnologias Utilizadas
	- **Linguagem**: Python
	- **Framework**: Django Rest Framework
	- **Serviços de Terceiros**: Open-meteo e Nominatim
## Instalação
	**Clone este repositório**: 
	- git clone https://github.com/BlackPearlBP/WeatherForecastAPI.git
	**Navegue até o diretório do projeto**: 
	- cd WeatherForecastAPI.
Crie um ambiente virtual e ative-o:
python -m venv venv
Para ativar o ambiente no Linux:
source venv/bin/activate
Para ativar o ambiente em Windows:  
venv\Scripts\activate 
Instale as dependências do backend:
pip install -r requirements.txt
Aplique as migrações do banco de dados:
python manage.py migrate
Execute o servidor de desenvolvimento:
python manage.py runserver
Instale as dependências do frontend:
cd frontend
npm install
npm run dev

	
##Uso
-**Acesse o software**:
http://localhost:5173/
##Endpoints
http://127.0.0.1:8000/api/forecast/?city=São Paulo&country=Brazil&type=daily
##Contribuição
Faça um fork do repositório.
Crie uma branch para sua feature ou correção de bug.
Envie um Pull Request para análise.
##Contato
Caso tenha dúvidas ou sugestões, entre em contato pelo GitHub Issues.
