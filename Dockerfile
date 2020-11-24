FROM golang:latest

RUN go get -u github.com/oxequa/realize && \
    go get -u github.com/gorilla/mux

# install revel and revel-cli
RUN go get github.com/revel/revel && \
    go get github.com/revel/cmd/revel
