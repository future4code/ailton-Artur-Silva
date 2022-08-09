const operacao = process.argv[1]



switch(operacao){
	case "soma":
		process.argv[2] + process.argv[3]
		break;
	case "subt":
		process.argv[2] - process.argv[3]
		break;
}
