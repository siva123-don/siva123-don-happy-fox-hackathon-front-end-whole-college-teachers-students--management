import Link from 'next/link';

export default function TeacherDashboard() {
  return (
    <div className="dashboard">
      <div className="section">
        <h2>Student Management</h2>
        <Link href="/view-student-list" className="dashboard-item">
          <span>View Student List</span>
        </Link>
        <Link href="/take-attendance" className="dashboard-item">
          <span>Take Attendance</span>
        </Link>
        <Link href="/performance-analytics" className="dashboard-item">
          <span>Performance Analytics</span>
        </Link>
      </div>

      <div className="section">
        <h2>Assignment Management</h2>
        <Link href="/create-assignment" className="dashboard-item">
          <span>Create Assignment</span>
        </Link>
        <Link href="/grade-submissions" className="dashboard-item">
          <span>Grade Submissions</span>
        </Link>
        <Link href="/manage-tests" className="dashboard-item">
          <span>Manage Tests</span>
        </Link>
      </div>

      <div className="section">
        <h2>Recent Activity</h2>
        <Link href="/recent-activity" className="dashboard-item">
          <span>View All Activity</span>
        </Link>
      </div>

      <div className="section">
        <h2>Quick Actions</h2>
        <Link href="/send-announcement" className="dashboard-item">
          <span>Send Announcement</span>
        </Link>
        <Link href="/schedule-office-hours" className="dashboard-item">
          <span>Schedule Office Hours</span>
        </Link>
        <Link href="/generate-reports" className="dashboard-item">
          <span>Generate Reports</span>
        </Link>
      </div>
    </div>
  );
} 