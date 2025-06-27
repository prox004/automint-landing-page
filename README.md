# AutoMint Landing Page

A modern, responsive marketing website for AutoMint - a decentralized Web3 invoicing system. This landing page showcases the features and benefits of AutoMint, built with Next.js 15, React 19, Tailwind CSS, and Framer Motion for smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional UI with dark/light theme support
- **Responsive**: Mobile-first design that looks great on all devices
- **Interactive**: Smooth animations and micro-interactions using Framer Motion
- **Performance**: Optimized with Next.js 15 and React 19
- **Accessibility**: Built with accessibility best practices
- **SEO Ready**: Optimized for search engines

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: React 19
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **TypeScript**: Full type safety

## 📦 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd automint-landing-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                     # Next.js app router
│   ├── dashboard/          # Protected dashboard page
│   ├── login/              # Login page (redirects to onboarding)
│   ├── layout.tsx          # Root layout with Web3 providers
│   └── page.tsx            # Landing page with onboarding flow
├── components/
│   ├── dashboard/          # Dashboard components
│   │   └── Dashboard.tsx   # Main dashboard component
│   └── onboarding/         # Onboarding flow components
│       └── OnboardingFlow.tsx
└── providers/
    └── Web3Providers.tsx   # Privy and Wagmi configuration
```

## Onboarding Flow

The app includes a 4-step mobile-first onboarding process:

1. **Welcome** - Introduction to AutoMint
2. **Features** - Highlighting key benefits
3. **Security** - Emphasizing blockchain security
4. **Connect** - Web3 wallet connection via Privy

## Authentication

Authentication is handled by Privy SDK with support for:

- Email authentication
- Wallet connections (MetaMask, WalletConnect, etc.)
- Embedded wallets for users without existing wallets
- Social logins (Google, Twitter, Discord)

## Supported Chains

- Ethereum Mainnet
- Ethereum Sepolia (testnet)
- Base
- Base Sepolia (testnet)
- Polygon
- Polygon Mumbai (testnet)

## Configuration

### Privy Configuration

The Privy provider is configured in `src/providers/Web3Providers.tsx` with:

- Custom appearance and branding
- Embedded wallet creation for new users
- Multiple login methods
- Multi-chain support

### Mobile Optimization

- Touch-friendly buttons (44px minimum)
- Mobile-first responsive design
- Optimized font sizes and spacing
- Smooth animations and transitions

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_PRIVY_APP_ID` | Your Privy app ID | Yes |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | WalletConnect project ID | No |
| `NEXT_PUBLIC_APP_NAME` | App name for branding | No |
| `NEXT_PUBLIC_APP_URL` | App URL for redirects | No |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Development

### Adding New Features

1. Create components in appropriate directories
2. Use TypeScript for type safety
3. Follow mobile-first design principles
4. Test on multiple screen sizes

### Styling

- Uses Tailwind CSS for styling
- Custom CSS variables for theming
- Mobile-first responsive design
- Dark mode support ready

## Troubleshooting

### Common Issues

1. **"Web3 configuration error"**
   - Ensure `NEXT_PUBLIC_PRIVY_APP_ID` is set correctly
   - Check that your Privy app is properly configured

2. **Build errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check for TypeScript errors with `npm run lint`

3. **Wallet connection issues**
   - Verify supported chains in Privy dashboard
   - Check network connectivity

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions:
- Check the GitHub issues
- Consult Privy documentation
- Reach out to the development team
