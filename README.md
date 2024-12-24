## MF Types

This repository serves as the type library for the Market Floor (MF) platform.

---

### Description
The `mf-types` repository provides a centralized and unified type definition library used across multiple MF platform projects, including:

- **User Front Page**
- **Admin Page**
- **Mobile App**

By maintaining shared types, this repository ensures:
- **Consistency:** Uniform data structure and type usage across all projects.
- **DRY Principle:** Avoids duplication of type definitions across repositories.
- **Type Safety:** Facilitates seamless type validation and integration between projects.
- **Efficiency:** Reduces development time and simplifies updates to type definitions.

---

### Features
- **Centralized Types:** Single source of truth for types shared across projects.
- **Auto-Generated Types:** All types are generated using the `easy-nest-generator` tool.
- **Version Control:** Each update is versioned for backward compatibility and smooth integration.

---

### Development Workflow

#### Generating Types
All type definitions in this repository are auto-generated using the `easy-nest-generator` tool which is written by mysefl To regenerate types:

1. In your backend application, install easy nest generator package:
   ```bash
   yarn add easy-nest-generator
   ```

2. Define destination file, destination folder ( which is this sub-repo ):
   ```bash
   git add .
   git commit -m "Update types"
   git push origin main
   ```

3. Run the generator tool:
   ```bash
   npx nest-gen model
   ```
   or
   ```bash
   npx nest-gen dto
   ```
   ```bash
   npx nest-gen hooks
   ```
   The generator will parse your backend models, dtos and hooks and automatically generate updated type definitions in this repository.

5. Update, type, model and hooks
   ```bash
   git add .
   git commit -m "Update types, models and hooks"
   git push origin main
   ```

---

### License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

### Contact
For questions or feedback, please contact the MF Types development team at kiethuynh.work@gmail.com.

