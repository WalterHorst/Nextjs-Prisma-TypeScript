"use client";
import { ChangeEvent, FormEvent, useEffect } from "react";
import "./page.css";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NewTask = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/tasks/${params.id}`).then((res) => {
        setForm({
          ...form,
          titulo: res.data.titulo,
          descripcion: res.data.descripcion,
        });
      });
    }
  }, []);

  const [form, setForm] = useState({
    titulo: "",
    descripcion: "",
  });

  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const sumitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (params.id) {
      axios.put(`/api/tasks/${params.id}`, form);
    } else {
      axios
        .post("/api/tasks", form)
        .then((res) => alert(res.data))
        .catch((error) => alert(error));
    }
    setForm({ titulo: "", descripcion: "" });
    router.refresh();
    router.push("/");
  };

  const deleteHandler = () => {
    axios.delete(`/api/tasks/${params.id}`);
    router.refresh();
    router.push("/");
  };

  return (
    <div className="container">
      <form onSubmit={sumitHandler} className="form-container">
        <div>
          <label>Titulo de la tarea</label>
          <input
            onChange={changeHandler}
            type="text"
            placeholder="Titulo de la tarea"
            name="titulo"
            value={form.titulo}
          />
        </div>
        <div>
          <label>Describe la tarea</label>
          <br></br>
          <textarea
            onChange={changeHandler}
            placeholder="Describe la tarea"
            name="descripcion"
            value={form.descripcion}
          />
        </div>
        <div className="buton-container">
          <button type="submit">{params.id ? "Editar" : "Crear"}</button>
          {params.id && (
            <button
              type="button"
              onClick={deleteHandler}
              className="delete-button "
            >
              Borrar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewTask;
