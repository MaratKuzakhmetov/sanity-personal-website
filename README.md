# Personal Website - Sanity CMS

A multilingual personal website built with Sanity CMS, featuring a modern content management system with support for English, Russian, and German languages.

## Features

- 🌍 **Multilingual Support**: Content management for English, Russian, and German
- 🎨 **Custom Color Input**: Enhanced color picker with predefined brand colors
- 📱 **Responsive Design**: Mobile-first approach with styled-components
- 🔧 **TypeScript**: Full TypeScript support for better development experience
- 📝 **Rich Content**: Block content editor with rich text formatting
- 🎯 **Structured Content**: Organized content blocks and global settings

## Project Structure

```
├── schemaTypes/           # Sanity schema definitions
│   ├── globalSettings.ts  # Global site settings (header, footer, etc.)
│   ├── mainPage.ts        # Main page content structure
│   ├── contentBlockType.ts # Content blocks for different languages
│   └── index.ts           # Schema exports
├── schemas/objects/       # Reusable schema objects
│   └── blockContent.ts    # Rich text content blocks
├── static/                # Static assets
├── sanity.config.ts       # Sanity configuration
└── package.json           # Dependencies and scripts
```

## Content Types

### Global Settings

- Header configuration (logo, navigation)
- Footer settings (logo, description, social links, copyright)
- Site-wide settings

### Main Page

- Main title and text content
- Content blocks references
- Language-specific content

### Content Blocks

- Reusable content blocks for each language
- Rich text content with formatting options
- Flexible content structure

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sanity-personal-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3333`

### Available Scripts

- `npm run dev` - Start development server
- `npm run start` - Start production server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to Sanity
- `npm run deploy-graphql` - Deploy GraphQL API

## Configuration

The project is configured with:

- **Project ID**: `srmsnwov`
- **Dataset**: `production`
- **Languages**: English (en), Russian (ru), German (de)

### Custom Color Palette

The project includes a custom color input plugin with predefined colors:

- Light: `#ffffff`
- Dark: `#333333`
- Brand: `#ca786d`
- Accent: `#626754`

## Technologies Used

- **Sanity CMS** - Headless content management
- **React** - UI framework
- **TypeScript** - Type safety
- **Styled Components** - CSS-in-JS styling
- **Sanity Vision** - Query tool
- **Document Internationalization** - Multi-language support

## Development

### Adding New Content Types

1. Create a new schema file in `schemaTypes/`
2. Export the schema in `schemaTypes/index.ts`
3. Add the schema to the Sanity configuration

### Adding New Languages

1. Add the language to the `languages` array in `sanity.config.ts`
2. Create content block types for the new language
3. Update the structure tool configuration

## Deployment

The project can be deployed using Sanity's hosting:

```bash
npm run deploy
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and unlicensed.
