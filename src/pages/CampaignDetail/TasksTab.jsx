import { useEffect, useState } from "react";
import { useTaskStore } from "../../store/taskStore";
import TaskFormModal from "../../components/TaskFormModal";

export default function TasksTab({ campaignId }) {
  const { tasks, fetchTasksByCampaign, deleteTask } = useTaskStore();
  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetchTasksByCampaign(campaignId);
  }, [campaignId]);

  const handleNew = () => {
    setSelectedTask(null);
    setOpenModal(true);
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setOpenModal(true);
  };

  return (
    <div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        onClick={handleNew}
      >
        Nueva tarea
      </button>

      <div className="space-y-2">
        {tasks.map((t) => (
          <div
            key={t.id}
            className="p-3 bg-white shadow rounded flex justify-between"
          >
            <div>
              <p className="font-semibold">{t.title}</p>
              <p className="text-sm text-gray-500">{t.status}</p>
            </div>

            <div className="space-x-3">
              <button className="text-blue-600" onClick={() => handleEdit(t)}>
                Editar
              </button>
              <button
                className="text-red-600"
                onClick={() => deleteTask(t.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <TaskFormModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        task={selectedTask}
        campaignId={campaignId}
      />
    </div>
  );
}