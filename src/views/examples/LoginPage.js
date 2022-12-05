import React, {useState, useEffect} from "react";
import { useHistory, Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import * as yup from 'yup';
let UserSchema = yup.object().shape({

  nombre_completo: yup.string().required("Campo requerido"),
  email: yup.string().email("Correo electronico invalido").required("Campo requerido"),
  password: yup.string().min(8,'La contraseña debe contener al menos 8 caracteres').required("Campo requerido")

})

function LoginPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const history = useHistory();
  const [squares1to6, setSquares1to6] = React.useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre_completo, setNombre] = useState('');
  const [estado] = useState(true);
  const [resgistrado, setResgistrado] = useState(null);
  const [squares7and8, setSquares7and8] = React.useState("");
  const [habilitado, setHabilitado] = useState(false);


  React.useEffect(() => {
    
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  },[]);


  useEffect(()=>{
    UserSchema.isValid({nombre_completo, email, password})
    .then(
      (valid) => {
        if(valid){
          setHabilitado(true)
        }else{
          setHabilitado(false)
        }
      }
    )
  },[nombre_completo, email, password, UserSchema])


  
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  const resgistroNuevoUsu = async () => {
    let myHeaders = new Headers();
myHeaders.append("Content-Type","application/json");

const raw = JSON.stringify({
  nombre_completo,
  email,
  password,
  estado
  
  
  
})

const options = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
}

const postData = await fetch("https://plataforma-saf-back.onrender.com/registro", options)
const res = postData.json()
console.log(res)
setResgistrado(true)
  }

  useEffect(() => {
    if(resgistrado){
      history.push("/SignUp-page")
    }
  },[resgistrado])

  return (
    <>
      <ExamplesNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
            <Card className="card-signup" data-background-color="blue">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/now-logo.png")}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                  <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons business_badge"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Nombre completo"
                        type="text"
                        onChange={(e)=>{setNombre(e.target.value)}}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Correo"
                        type="text"
                        onChange={(e)=>{setEmail(e.target.value)}}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_lock-circle-open"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Contraseña"
                        type="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                      ></Input>
                    </InputGroup>
                    <FormGroup check>
                <Label check>
                  <Input type="checkbox"></Input>
                  <span className="form-check-sign"></span>
                  ¿Quieres recibir noticias del SAF?
                </Label>
              </FormGroup>
                    <Button
                    className="btn-neutral btn-round"
                    color="info"
                    disabled={habilitado ? false : true}
                    onClick={resgistroNuevoUsu}
                    size="lg"
                  >{habilitado ? "Aceptar" : "Aceptar"}
                  </Button>
                  </CardBody>
                  <CardFooter className="text-center">
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Registrarse
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Nesecito ayuda
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;
