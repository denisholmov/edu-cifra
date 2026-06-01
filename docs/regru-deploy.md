# Деплой на Reg.ru через GitHub

`git push` в `main` → сборка → выкладка на хостинг по FTP.

## 1. Подготовка в Reg.ru

1. Панель хостинга → **WWW-домены** → создайте `baskomplekt.ru` (если ещё нет).
2. Запомните **папку сайта** (часто `www/baskomplekt.ru/`).
3. **FTP-доступ** — хост, логин, пароль.
4. SSL (Let's Encrypt) — можно до или после первого деплоя.

Домен с Vercel пока **не отвязывайте** — сначала проверьте сайт по временному адресу Reg.ru (если есть) или после смены DNS.

## 2. Секреты в GitHub

Репозиторий → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:

| Секрет | Пример / откуда |
|--------|------------------|
| `REGRU_FTP_HOST` | из раздела FTP (например `u3533664.reg.ru` или IP) |
| `REGRU_FTP_USER` | логин FTP |
| `REGRU_FTP_PASSWORD` | пароль FTP |
| `REGRU_FTP_REMOTE_DIR` | `www/baskomplekt.ru/` (путь из панели, со слэшем в конце) |

Если файлы не попадают в сайт — попробуйте другой путь из файлового менеджера (FTP открывается в корне аккаунта).

## 3. Первый деплой

```bash
git add .github/workflows/deploy-regru.yml public/.htaccess docs/regru-deploy.md
git commit -m "CI: автодеплой на Reg.ru"
git push origin main
```

**Actions** → workflow **Deploy to Reg.ru** → зелёная галочка.

## 4. Проверка

Откройте сайт по домену (после DNS) или по URL из панели Reg.ru.

## 5. Перенос домена с Vercel

Когда сайт на Reg.ru открывается нормально:

1. Reg.ru → DNS домена `baskomplekt.ru` → A-запись на хостинг (или привязка домена к хостингу в одном кабинете).
2. Vercel → Project → **Domains** → удалить `baskomplekt.ru`.
3. Подождать обновления DNS (до 24–48 ч).

## Обновления

Любые правки → `git push` в `main` — сайт обновится автоматически.
