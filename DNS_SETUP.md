# 🌐 DNS Configuration for taufer.dev

## GitHub Pages Setup Steps

### 1. Enable GitHub Pages (REQUIRED)
1. Go to https://github.com/gabriel-taufer/portfolio/settings/pages
2. Under "Build and deployment":
   - Source: **GitHub Actions**
3. Under "Custom domain":
   - Enter: `taufer.dev`
   - Click **Save**
4. Wait for DNS check (may take a few minutes)
5. ✅ Enable "Enforce HTTPS" once DNS is verified

### 2. Configure DNS at your Domain Provider

Go to your domain registrar (where you bought taufer.dev) and add these records:

#### Option A: Using A Records (Recommended)
**Remove any existing A or CNAME records for @ or taufer.dev first!**

Add these **4 A records** pointing to GitHub Pages:

| Type | Name/Host | Value/Points to     | TTL  |
|------|-----------|---------------------|------|
| A    | @         | 185.199.108.153     | 3600 |
| A    | @         | 185.199.109.153     | 3600 |
| A    | @         | 185.199.110.153     | 3600 |
| A    | @         | 185.199.111.153     | 3600 |

Add **CNAME for www**:

| Type  | Name/Host | Value/Points to              | TTL  |
|-------|-----------|------------------------------|------|
| CNAME | www       | gabriel-taufer.github.io.    | 3600 |

#### Option B: Using CNAME (Alternative)
If your DNS provider supports CNAME on apex domain:

| Type  | Name/Host | Value/Points to              | TTL  |
|-------|-----------|------------------------------|------|
| CNAME | @         | gabriel-taufer.github.io.    | 3600 |
| CNAME | www       | gabriel-taufer.github.io.    | 3600 |

### 3. Verify DNS Propagation

Wait 5-30 minutes, then check:

```bash
# Check A records
dig taufer.dev +short

# Should show GitHub IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Check CNAME
dig www.taufer.dev +short
# Should show: gabriel-taufer.github.io.
```

Or use online tool: https://dnschecker.org/#A/taufer.dev

### 4. Trigger Deployment

The workflow will automatically run on push to main, but you can also:

1. Go to https://github.com/gabriel-taufer/portfolio/actions
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

### 5. Access Your Site

After deployment completes (2-3 minutes):
- ✅ https://taufer.dev
- ✅ https://www.taufer.dev (redirects to main)
- ✅ https://taufer.dev/pt (Portuguese version)

## 🔧 Troubleshooting

### DNS not resolving
- Wait up to 48 hours for DNS propagation (usually 5-30 min)
- Clear your DNS cache:
  ```bash
  # macOS
  sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

  # Windows
  ipconfig /flushdns

  # Linux
  sudo systemd-resolve --flush-caches
  ```

### 404 error on deployment
- Check that workflow completed successfully
- Verify CNAME file exists in `dist/` after build
- Make sure GitHub Pages is enabled in repository settings

### SSL certificate error
- GitHub provides free SSL via Let's Encrypt
- May take 10-20 minutes after DNS verification
- Enable "Enforce HTTPS" in Pages settings once available

### Site not updating
- Check Actions tab for build errors
- Verify workflow ran after your push
- Clear browser cache (Cmd/Ctrl + Shift + R)

## 📊 Common DNS Provider Instructions

### Namecheap
1. Domain List → Manage → Advanced DNS
2. Add the A and CNAME records above
3. Delete any conflicting Parking Page records

### Cloudflare
1. DNS → Records
2. Add A and CNAME records
3. Set Proxy status to "DNS only" (gray cloud)
4. Wait for DNS propagation

### Google Domains / Squarespace
1. DNS → Manage custom records
2. Add A and CNAME records as shown above

### GoDaddy
1. DNS → Manage Zones
2. Add records (may need to delete default parking page)

## ✅ Verification Checklist

- [ ] GitHub Actions workflow file created (`.github/workflows/deploy.yml`)
- [ ] CNAME file created (`public/CNAME`)
- [ ] Code pushed to GitHub (`main` branch)
- [ ] DNS A records configured at domain provider
- [ ] DNS CNAME for www configured
- [ ] GitHub Pages enabled in repository settings
- [ ] Custom domain added in GitHub Pages settings
- [ ] DNS propagation verified (dig/dnschecker)
- [ ] Workflow ran successfully (check Actions tab)
- [ ] Site accessible at https://taufer.dev
- [ ] HTTPS enforced in GitHub Pages settings

## 🎯 Expected Timeline

| Step | Duration |
|------|----------|
| Push to GitHub | Immediate |
| Workflow build & deploy | 2-3 minutes |
| DNS propagation | 5-30 minutes (up to 48h) |
| SSL certificate provision | 10-20 minutes |
| **Total (typical)** | **15-60 minutes** |

---

**Current Status:**
- ✅ GitHub Actions workflow configured
- ✅ CNAME file created
- ✅ Code pushed to repository
- ⏳ Waiting for DNS configuration & GitHub Pages setup

**Next:** Configure DNS at your domain provider and enable GitHub Pages!
