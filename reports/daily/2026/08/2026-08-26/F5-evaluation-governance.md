# F5｜Evaluation, Safety, Governance, and Standards

W35 H9 is added today:

> **Explicit Agent-runtime termination becomes a first-class control primitive**

Evidence is implementation-level rather than standards-level: GitHub and Microsoft Foundry expose explicit session-stop semantics

This does not establish a universal revocation protocol

Evaluation must therefore distinguish:

- resource denied
- current operation cancelled
- session stopped
- compute terminated
- state preserved
- credentials revoked
- side effects rolled back or retained

**Boundary:** stop success is not evidence that every unsafe effect has been neutralized
