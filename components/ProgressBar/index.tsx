"use client";
const SkillBar = ({ skillName, percentage }: any) => {
  const validPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400  font-semibold">{skillName}</span>
        <span className="text-indigo-400  font-bold">{validPercentage}%</span>
      </div>

      <div className="w-full bg-gray-300 rounded-full h-1  overflow-hidden">
        <div
          className="bg-gradient-to-r from-yellow-500 to-yellow-400 opacity-65 h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${validPercentage}%` }}
          aria-valuenow={validPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
