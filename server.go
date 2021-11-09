package main

import (
	"bufio"
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	fs := http.FileServer(http.Dir("."))
	http.Handle("/", fs)
	http.Handle("/endpointer", http.HandlerFunc(endpointer))

	log.Println("Listening on :8000...")
	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal(err)
	}
}

func endpointer(response http.ResponseWriter, request *http.Request) {
	fmt.Printf("Endpointer, request from ip %s\n", request.RemoteAddr)
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Escribir respuesta: ")
	text, _ := reader.ReadString('\n')
	//fmt.Fprintf(response, text)
	response.WriteHeader(http.StatusOK)
	_, err := response.Write([]byte(text))
	if err != nil {
		fmt.Errorf("error while writting bytes to response writer: %+v", err)
	}
}
