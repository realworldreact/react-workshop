# Controlled vs Uncontrolled Inputs
    * Inputs can be controlled or uncontrolled
        * Uncontrolled input components
            * No Value Prop
            * Use onChange to get value of component
            * Value is internal, i.e. Component is stateful
        * Controlled Components
            * Value Prop
            * React sets the value of the input field
            * How does value get updated?
                * Using onChange to update state
                * state is used to set Value
                * if state is not updated, input value will not be updated

# One-way data flow is the new black
    * As opposed by two-way binding
        * Model updates view, view updated model, until both reconcile
        * Convinient for a view bindings, gets out of hand when there are
          thousands of bindings
    * Data flows from a single source of truth
        * Owner pushes data to children
        * When view updates a value, the event goes through the callback,
          changing the state, than state updates the view, the circle of life is
          completed

# Container Pattern
    * Smart (container) component
        * Does not have dom elements, only children components
        * May also be responsible for making api calls
        * May have internal state
        * Passes state down to children as props
    * Dump (presentational) component
        * Has no internal state
        * Only renders props
        * Can render other dump child components
        * Can pass props to child components
        * Renders same view for same props

# Props II, Talking to parents
    * How do I set state on parents?
        * Information that needs to go up the tree should be sent up through
          callbacks
        * Callbacks are created on the parent and passed to the child as props
