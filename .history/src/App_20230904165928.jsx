

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainLayout />}>
          <Route index element={<Skills />} />
          <Route path="otherPage" element={<OtherPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
