# Desafio dos dardos

Em um jogo de dardos, os pontos são calculados de acordo com a posição que o dardo atinge em relação ao centro do alvo.A pontuação é feita da seguinte forma:

	Dardos que não atingem o alvo, recebem 0 pontos;
    Dardos que atingem o círculo externo do alvo recebem 1 ponto;
    Dardos que atingem o círculo médio do alvo recebem 5 pontos;
	Dardos que atingem o círculo interno do alvo recebem 10 pontos;
    
O alvo possui as seguintes dimensões:

	O círculo externo possui um raio de 10 unidades (equivalente ao raio total do alvo)
	O círculo médio possui um raio de 5 unidades;
	O círculo interno possui um raio de 1 unidade;

Todos os círculos são concêntricos (todos estão alinhados no mesmo centro) sendo o centro a coordenada (0, 0).
 
Escreva uma função em JavaScript que receba as coordenadas (x, y) da posição do dardo e retorne um número inteiro informando a pontuação obtida.
