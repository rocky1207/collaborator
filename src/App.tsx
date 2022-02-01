import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const About = lazy(() => import('@pages/About'));
const TestBB = lazy(() => import('@pages/TestBB'));
const TestSS = lazy(() => import('@pages/TestSS'));
const TestVS = lazy(() => import('@pages/TestVS'));
const TestSM = lazy(() => import('@pages/TestSM'));
const TestMB = lazy(() => import('@pages/TestMB'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const Timesheet = lazy(() => import('@pages/Timesheet'));
const TimesheetDetails = lazy(() => import('@components/TimesheetDetails'));
const PrivateRoute = lazy(
    () => import('@components/PrivateRoute/PrivateRoute')
);
const ProtectedRoute = lazy(
    () => import('@components/ProtectedRoute/ProtectedRoute')
);
const Layout = lazy(() => import('@components/Layout'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));
const AdminOverview = lazy(() => import('@pages/AdminOverview'));
const UserOverview = lazy(() => import('@pages/UsersOverview'));
const People = lazy(() => import('@pages/People'));
const Profile = lazy(() => import('@pages/Profile'));
const Projects = lazy(() => import('@pages/Projects'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const ErrorBoundary = lazy(() => import('@components/ErrorBoundary'));
const ClientPage = lazy(() => import('@components/ClientPage'));
const Tutorials = lazy(() => import('@pages/Tutorials'));

function App() {
    const isAdmin = localStorage.getItem('admin');
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route element={<Layout />}>
                            <Route
                                path="/"
                                element={
                                    isAdmin ? (
                                        <AdminOverview />
                                    ) : (
                                        <UserOverview />
                                    )
                                }
                            />
                            <Route element={<ProtectedRoute />}>
                                <Route
                                    path="user-overview"
                                    element={<UserOverview />}
                                />
                                <Route path="about" element={<About />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route
                                    path="/timesheet"
                                    element={<Timesheet />}
                                />
                                <Route
                                    path="/timesheet/:day/:month/:year"
                                    element={<TimesheetDetails />}
                                />
                            </Route>
                            <Route element={<PrivateRoute />}>
                                <Route
                                    path="/admin-overview"
                                    element={<AdminOverview />}
                                />
                                <Route path="about" element={<About />} />
                                <Route path="/people" element={<People />} />
                                <Route
                                    path="/projects"
                                    element={<Projects />}
                                />
                                <Route
                                    path="/clients"
                                    element={<ClientPage />}
                                />
                            </Route>
                            <Route path="/testsm" element={<TestSM />} />
                            <Route path="/testvs" element={<TestVS />} />
                            <Route path="/testbb" element={<TestBB />} />
                            <Route path="/testss" element={<TestSS />} />
                            <Route path="/testmb" element={<TestMB />} />
                            <Route path="/error" element={<ErrorPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                            <Route path="/tutorials" element={<Tutorials />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
