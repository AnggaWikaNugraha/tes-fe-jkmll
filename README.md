# Step 1

- Setiap isi form akan divalidasi secara inline, dimana :
  -- hijau menandakan bahwa input sudah valid
  -- Orange menandakan bahwa input tidak valid
- Send as Dropshipper
  -- Jika tidak dicentang, disable dan kosongkan form Dropshipper
  -- Jika dicentang, form tersebut harus diisi dan akan dikenakan biaya Dropship Fee sebesar 5.900
- Phone Number:
 --Hanya boleh mengandung 0-9,-,+,(,)
- Digit angka minimal 6 digit dan maksimal 20 digit
- Address:
 -- Harus diisi
 -- Maksimal 120 digit
 -- Terdapat counter angka yang menginformasikan jumlah digit yang tersisa secara real-time
- Email
 -- Harus berupa isian email yang valid

# step 2

- Shipping
 -- Harus dipilih
- Delivery Estimate
 -- JNE: 2 days, Go Send: today, Personal Courier: 1 day
- Payment
 -- Button akan berubah sesuai payment type yang dipilih

# step 3 

- Go to homepage akan mengembalikan halaman ke step 1 seperti state awal
- Order ID
 -- Generate random 5 digit alphanumeric dengan pengecualian 1,I,0,O