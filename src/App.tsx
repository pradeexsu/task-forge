import { useState } from 'react';
import FlexBox from './components/common/FlexBox';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import UpdateTask from './components/UpdateTask';
import { useStore } from './store';
import NavBar from './components/common/NavBar';

function App() {
  const { tasks, deleteTask, updateTask } = useStore();
  const [updateId, setUpdateId] = useState('');
  console.log('====================================');
  console.log(updateId);
  console.log('====================================');
  return (
    <>
      <main className="relative h-screen bg-gray-100 dark:bg-gray-800 flex justify-center w-full">
        <FlexBox
          direction="column"
          className="mt-4 p-10 w-full lg:px-[20%] md:px-[10%] "
        >
          <NavBar />
          <TaskInput />
          <FlexBox direction="column" gap={10} className="mt-4 w-full">
            {tasks?.map((task) =>
              task?.id === updateId ? (
                <UpdateTask
                  data={task}
                  key={task?.id}
                  onUpdate={(data) => {
                    updateTask(data);
                    setUpdateId('');
                  }}
                  onCancelUpdate={() => setUpdateId('')}
                />
              ) : (
                <TaskItem
                  data={task}
                  key={task?.id}
                  onDelete={deleteTask}
                  setUpdateId={setUpdateId}
                />
              )
            )}
          </FlexBox>
        </FlexBox>

        <div hidden>
          <div className="badge">default</div>
          <div className="badge badge-neutral">neutral</div>
          <div className="badge badge-primary">primary</div>
          <div className="badge badge-secondary">secondary</div>
          <div className="badge badge-accent">accent</div>
          <div className="badge badge-ghost">ghost</div>
          <div className="badge badge-succces">ghost</div>
          <div className="badge badge-lg">987,654</div>
          <div className="badge badge-md">987,654</div>
          <div className="badge badge-sm">987,654</div>
          <div className="badge badge-xs">987,654</div>
          <div className="badge badge-info gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            info
          </div>
          <div className="badge badge-success gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            success
          </div>
          <div className="badge badge-warning gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            warning
          </div>
          <div className="badge badge-error gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            error
          </div>
          <p className="text-sm ...">The quick brown fox ...</p>
          <p className="text-base ...">The quick brown fox ...</p>
          <p className="text-lg ...">The quick brown fox ...</p>
          <p className="text-xl ...">The quick brown fox ...</p>
          <p className="text-2xl ...">The quick brown fox ...</p>
          <button className="btn">Button</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
          <button className="btn btn-active">Default</button>
          <button className="btn btn-active btn-neutral">Neutral</button>
          <button className="btn btn-active btn-primary">Primary</button>
          <button className="btn btn-active btn-secondary">Secondary</button>
          <button className="btn btn-active btn-accent">Accent</button>
          <button className="btn btn-active btn-ghost">Ghost</button>
          <button className="btn btn-active btn-link">Link</button>

          <button className="btn btn-info">Info</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
          <button className="btn btn-outline">Default</button>
          <button className="btn btn-outline btn-primary">Primary</button>
          <button className="btn btn-outline btn-secondary">Secondary</button>
          <button className="btn btn-outline btn-accent">Accent</button>
          <button className="btn btn-outline btn-info">Info</button>
          <button className="btn btn-outline btn-success">Success</button>
          <button className="btn btn-outline btn-warning">Warning</button>
          <button className="btn btn-outline btn-error">Error</button>
          <button className="btn btn-lg">Large</button>
          <button className="btn">Normal</button>
          <button className="btn btn-sm">Small</button>
          <button className="btn btn-xs">Tiny</button>
        </div>
      </main>
    </>
  );
}

export default App;
