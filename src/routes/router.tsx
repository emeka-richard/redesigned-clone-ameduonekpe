// stylelint-disable-line
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Spinner from '../components/spinner-component/Spinner';
// import AuditLayout from '../layouts/auditLayout';
// import TaxLayout from '../layouts/TaxLayout';
// import OtherLayout from '../layouts/OthersLayout';
// import AppLayout from "../layouts/AppLayout";

// Lazy loading the components
const AppLayout = lazy(() => import('../layouts/AppLayout'));
const AboutLayout = lazy(() => import('../layouts/AboutLayout'));
// const ServicesLayout = lazy(() => import('../layouts/ServicesLayout'));
const BlogsInsightLayout = lazy(() => import('../layouts/BlogsInsightLayout'));
const SimulatedArticle = lazy(() => import('../components/blogs_insights-components/Simulated_Article'));
const BlogInsight = lazy(() => import('../components/blogs_insights-components/Blog_Insight'));
const CareersLayout = lazy(() => import('../layouts/CareersLayout'));
const ContactUsLayout = lazy(() => import('../layouts/ContactUsLayout'));
const AuditLayout = lazy(() => import('../layouts/AuditLayout'));
const TaxLayout = lazy(() => import('../layouts/TaxLayout'));
const OtherLayout = lazy(() => import('../layouts/OthersLayout'));


// Fallback component to display while loading
// const LoadingFallback = () => <div>Loading...</div>;

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        // element:<AppLayout />,
        element: (
          <Suspense fallback={<Spinner />}>
            <AppLayout />
          </Suspense>
        ),
        children: [],
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<Spinner />}>
            <AboutLayout />
          </Suspense>
        ),
      },
      {
        path: 'teams',
        element: (
          <Suspense fallback={<Spinner />}>
            <AboutLayout />
          </Suspense>
        ),
      },
      // {
      //   path: 'others',
      //   element: (
      //     <Suspense fallback={<Spinner />}>
      //       <AboutLayout />
      //     </Suspense>
      //   ),
      // },
      {
        path: 'services/audit&assurance',
        element: (
          <Suspense fallback={<Spinner />}>
            <AuditLayout />
          </Suspense>
        ),
      },
      {
        path: 'services/taxconsulting',
        element: (
          <Suspense fallback={<Spinner />}>
            <TaxLayout />
          </Suspense>
        ),
      },
      {
        path: 'services/others',
        element: (
          <Suspense fallback={<Spinner />}>
            <OtherLayout />
          </Suspense>
        ),
      },
      {
        path: 'blogs&insights',
        element: (
          <Suspense fallback={<Spinner />}>
            <BlogsInsightLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Spinner />}>
                <BlogInsight />
              </Suspense>
            ),
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<Spinner />}>
                <SimulatedArticle />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'careers',
        element: (
          <Suspense fallback={<Spinner />}>
            <CareersLayout />
          </Suspense>
        ),
      },
      {
        path: 'contact-us',
        element: (
          <Suspense fallback={<Spinner />}>
            <ContactUsLayout />
          </Suspense>
        ),
      },
      {
        path: '*',
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
