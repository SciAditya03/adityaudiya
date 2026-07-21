import { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Catches render errors in a subtree so one broken section doesn't take
 * the whole page down. Each lazily-loaded section is wrapped in its own
 * boundary, so a failure degrades to a small inline notice in place of
 * that section while the rest of the portfolio keeps working.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Surface it for debugging; swap for a real reporter in production.
    console.error('Section failed to render:', error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children, name } = this.props;

    if (hasError) {
      return (
        <section role="alert" style={{ padding: '80px 48px', color: 'var(--drift)' }}>
          <p style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {name ? `The ${name} section didn't load.` : "This section didn't load."} Reload the page to try again.
          </p>
        </section>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

export default ErrorBoundary;
