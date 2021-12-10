import React from 'react'

export default function About() {
    return (
      <div>
        <h1 className="text-center text-primary my-3">About</h1>
        <div className="container">
          <img
            className="rounded mx-auto d-block"
            src="https://media.istockphoto.com/photos/to-do-list-picture-id504647866?k=6&m=504647866&s=170667a&w=0&h=7oKIyLAoL7zrjfXtdPYIDWO8g-Gjuz_OcQuxX4cfjQE="
            alt="TODO"
          />

          <p className="container my-5 ">
            ToDo List App is a kind of app that generally used to maintain our
            day-to-day tasks or list everything that we have to do, with the
            most important tasks at the top of the list, and the least important
            tasks at the bottom. It is helpful in planning our daily schedules.
            We can add more tasks at any time and delete a task that is
            completed.
          </p>
          <p className="container my-5  ">
            In this version of the ToDo list, the user will be getting 
            <ul>
              <li>
                Create (add) a new task or adding a new ToDo in the ToDo List
                App and can save them for further future use.
              </li>
              <li>
                See all the tasks or View all the ToDos that were added to the
                app.
              </li>
              <li>Delete any ToDo from the list of ToDos.</li>
              <li>Exit from the app.</li>
            </ul>
          </p>
        </div>
      </div>
    );
}
