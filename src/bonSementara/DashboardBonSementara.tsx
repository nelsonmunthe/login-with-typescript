import { Button, MenuItem, MenuList, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import Pagination from '../models/Pagination';

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "no_transaksi",
      headerName: "Nomor Transaksi",
      width: 250,
    },
    {
      field: "status_transaksi",
      headerName: "Status Transaksi",
      width: 250,
    },
    {
      field: "nilai_realisasi",
      headerName: "Nilai Realisasi",
      width: 150,
      valueFormatter: (params: any) => {
        if (params.value) {
          const jumlah = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(params.value);
          const final = jumlah.slice(0, -3);
          return final;
        } else return "";
      },
    },
    {
      field: "no_bon_sementara",
      headerName: "No Bon Sementara",
      width: 300,
    },
    {
      field: "nilai_bon_sementara",
      headerName: "Nilai Bon Sementara",
      valueFormatter: (params: any) => {
        if (params.value) {
          const jumlah = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(params.value);
          const final = jumlah.slice(0, -3);
          return final;
        } else return "";
      },
      width: 200,
    },
    {
      field: "sisa_bon_sementara",
      headerName: "Nilai Harus Dibayar Karyawan",
      valueFormatter: (params: any) => {
        if (params.value) {
          const jumlah = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(params.value);
          const final = jumlah.slice(0, -3);
          return final;
        } else return "";
      },
      width: 250,
    },
    {
      field: "sisa_balance_realisasi",
      headerName: "Nilai Harus Dibayar Perusahaan",
      valueFormatter: (params: any) => {
        if (params.value) {
          const jumlah = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(params.value);
          const final = jumlah.slice(0, -3);
          return final;
        } else return "";
      },
      width: 250,
    },
    {
      field: "tanggal_generate_csv",
      headerName: "Tanggal Generate CSV",
      valueFormatter: (params: any) => {
        if (params.value) {
          const formattedValue1 = String(params.value);
          const formattedValue = formattedValue1.substring(0, 10);
          const date = new Date(formattedValue);
          const formattedValueFinal =
            date.toLocaleString("en-US", { day: "2-digit" }) +
            "-" +
            date.toLocaleString("en-US", { month: "2-digit" }) +
            "-" +
            date.getFullYear();
          return formattedValueFinal;
        } else return "";
      },
      valueParser: (value: any) => {
        const date = new Date(value);
        const formattedValueFinal =
          date.toLocaleString("en-US", { day: "2-digit" }) +
          "-" +
          date.toLocaleString("en-US", { month: "2-digit" }) +
          "-" +
          date.getFullYear();
        return formattedValueFinal;
      },
      width: 200,
    },
    {
      field: "tanggal_terbayar_karyawan",
      headerName: "Tanggal Terbayar Oleh Karyawan",
      valueFormatter: (params: any) => {
        if (params.value) {
          const formattedValue1 = String(params.value);
          const formattedValue = formattedValue1.substring(0, 10);
          const date = new Date(formattedValue);
          const formattedValueFinal =
            date.toLocaleString("en-US", { day: "2-digit" }) +
            "-" +
            date.toLocaleString("en-US", { month: "2-digit" }) +
            "-" +
            date.getFullYear();
          return formattedValueFinal;
        } else return "";
      },
      valueParser: (value: any) => {
        const date = new Date(value);
        const formattedValueFinal =
          date.toLocaleString("en-US", { day: "2-digit" }) +
          "-" +
          date.toLocaleString("en-US", { month: "2-digit" }) +
          "-" +
          date.getFullYear();
        return formattedValueFinal;
      },
      width: 250,
    },
    {
      field: "tanggal_terbayar_perusahaan",
      headerName: "Tanggal Terbayar Oleh Perusahaan",
      valueFormatter: (params: any) => {
        if (params.value) {
          const formattedValue1 = String(params.value);
          const formattedValue = formattedValue1.substring(0, 10);
          const date = new Date(formattedValue);
          const formattedValueFinal =
            date.toLocaleString("en-US", { day: "2-digit" }) +
            "-" +
            date.toLocaleString("en-US", { month: "2-digit" }) +
            "-" +
            date.getFullYear();
          return formattedValueFinal;
        } else return "";
      },
      valueParser: (value: any) => {
        const date = new Date(value);
        const formattedValueFinal =
          date.toLocaleString("en-US", { day: "2-digit" }) +
          "-" +
          date.toLocaleString("en-US", { month: "2-digit" }) +
          "-" +
          date.getFullYear();
        return formattedValueFinal;
      },
      width: 250,
    },
    {
      field: "aplikasi_asal_transaksi",
      headerName: "Transaksi Source",
      width: 150,
    },
  
    {
      field: "no_transaksi_frontend",
      headerName: "Nomor Transaksi Frontend",
      width: 200,
    },
    {
      field: "no_transaksi_netsuite",
      headerName: "Nomor Transaksi Netsuite",
      width: 200,
    },
    {
      field: "alasan_pulling_account_revise",
      headerName: "Alasan Pulling Account Revise",
      width: 250,
    },
    {
      field: "tanggal_transaksi",
      headerName: "Tanggal Transaksi",
      type: "date",
      valueFormatter: (params: any) => {
        if (params.value) {
          const formattedValue1 = String(params.value);
          const formattedValue = formattedValue1.substring(0, 10);
          const date = new Date(formattedValue);
          const formattedValueFinal =
            date.toLocaleString("en-US", { day: "2-digit" }) +
            "-" +
            date.toLocaleString("en-US", { month: "2-digit" }) +
            "-" +
            date.getFullYear();
          return formattedValueFinal;
        } else return "";
      },
      valueParser: (value: any) => {
        const date = new Date(value);
        const formattedValueFinal =
          date.toLocaleString("en-US", { day: "2-digit" }) +
          "-" +
          date.toLocaleString("en-US", { month: "2-digit" }) +
          "-" +
          date.getFullYear();
        return formattedValueFinal;
      },
      width: 150,
    },
    {
      field: "subsidiary",
      headerName: "Subsidiary",
      width: 250,
    },
    {
      field: "lokasi",
      headerName: "Lokasi",
      width: 180,
    },
    {
      field: "area_name",
      headerName: "Area",
      width: 180,
    },
    {
      field: "region",
      headerName: "Region",
      width: 180,
    },
    {
      field: "dengan_bukti_transfer",
      headerName: "Bukti Transfer",
      width: 130,
      renderCell: (params: any) => {
        console.log(params);
        if (params.value) {
          return <CheckBoxIcon></CheckBoxIcon>;
        } else {
          return <></>;
        }
      },
    },
];

// const rows = [
//     {
//       "id": 705,
//       "no_transaksi": "BS/AMB/0823/000000711",
//       "tanggal_transaksi": "2023-08-10T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10123100",
//       "akun_bank_regional_id": "2066",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : KAL - SULAM - PAPUA 1 - RF - IDR - BRI 1176.01.000299.30.4",
//       "balance_bon_sementara": 0,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-08-10T17:00:00.000Z",
//       "payment_date": "2023-08-10T17:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1041062",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 135000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "AMB",
//       "lokasi_id": 622,
//       "region": "KAL SULAM PAPUA REGION",
//       "region_id": 8,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9543,
//       "bank_cabang_journal_id": 9544,
//       "created_date": "2023-08-11T01:24:22.000Z",
//       "area_id": 2,
//       "area_name": "KAL-SULAM-PAPUA 1",
//       "no_transaksi_claim": "RS/AMB/0823/000000005",
//       "tanggal_transaksi_claim": "2023-08-11T00:00:00.000Z",
//       "jumlah_realisasi": 135000
//     },
//     {
//       "id": 704,
//       "no_transaksi": "BS/AMB/0823/000000710",
//       "tanggal_transaksi": "2023-08-10T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10123100",
//       "akun_bank_regional_id": "2066",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : KAL - SULAM - PAPUA 1 - RF - IDR - BRI 1176.01.000299.30.4",
//       "balance_bon_sementara": 109999,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-08-10T17:00:00.000Z",
//       "payment_date": "2023-08-10T17:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1041061",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 110000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "AMB",
//       "lokasi_id": 622,
//       "region": "KAL SULAM PAPUA REGION",
//       "region_id": 8,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9536,
//       "bank_cabang_journal_id": 9537,
//       "created_date": "2023-08-11T01:04:46.000Z",
//       "area_id": 2,
//       "area_name": "KAL-SULAM-PAPUA 1",
//       "no_transaksi_claim": "RS/AMB/0823/000000004",
//       "tanggal_transaksi_claim": "2023-08-11T00:00:00.000Z",
//       "jumlah_realisasi": 1
//     },
//     {
//       "id": 703,
//       "no_transaksi": "BS/KRW : LBSR0/0823/000000709",
//       "tanggal_transaksi": "2023-08-10T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122200",
//       "akun_bank_regional_id": "2037",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : BGR - RF - IDR - BCA 2050032097",
//       "balance_bon_sementara": null,
//       "status_bon_sementara": "Need Payment",
//       "tanggal_generate_csv": null,
//       "payment_date": null,
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": null,
//       "no_transaksi_netsuite": null,
//       "alasan_pulling_account_reject": null,
//       "jumlah": 110000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "KRW : LBSR0",
//       "lokasi_id": 1637,
//       "region": "JABODETABEK REGION",
//       "region_id": 2,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": null,
//       "bank_cabang_journal_id": null,
//       "created_date": "2023-08-11T01:04:02.000Z",
//       "area_id": 13,
//       "area_name": "JAKARTA 2",
//       "no_transaksi_claim": null,
//       "tanggal_transaksi_claim": null,
//       "jumlah_realisasi": null,
//       "aging_bon_sementara": 2
//     },
//     {
//       "id": 702,
//       "no_transaksi": "BS/BDG/0823/000000708",
//       "tanggal_transaksi": "2023-08-10T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122300",
//       "akun_bank_regional_id": "2038",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : JABAR - RF - IDR - BCA 2050032101",
//       "balance_bon_sementara": 139999,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-08-10T17:00:00.000Z",
//       "payment_date": "2023-08-10T17:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1041060",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 140000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "BDG",
//       "lokasi_id": 107,
//       "region": "JABAR REGION",
//       "region_id": 10,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9529,
//       "bank_cabang_journal_id": 9530,
//       "created_date": "2023-08-11T00:59:59.000Z",
//       "area_id": 1,
//       "area_name": "JABAR",
//       "no_transaksi_claim": "RS/BDG/0823/000000003",
//       "tanggal_transaksi_claim": "2023-08-11T00:00:00.000Z",
//       "jumlah_realisasi": 1
//     },
//     {
//       "id": 701,
//       "no_transaksi": "BS/BDG/0823/000000707",
//       "tanggal_transaksi": "2023-08-10T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122300",
//       "akun_bank_regional_id": "2038",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : JABAR - RF - IDR - BCA 2050032101",
//       "balance_bon_sementara": 0,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-08-10T17:00:00.000Z",
//       "payment_date": "2023-08-10T17:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1041058",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 120000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "BDG",
//       "lokasi_id": 107,
//       "region": "JABAR REGION",
//       "region_id": 10,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9524,
//       "bank_cabang_journal_id": 9525,
//       "created_date": "2023-08-11T00:45:24.000Z",
//       "area_id": 1,
//       "area_name": "JABAR",
//       "no_transaksi_claim": "RS/BDG/0823/000000002",
//       "tanggal_transaksi_claim": "2023-08-11T00:00:00.000Z",
//       "jumlah_realisasi": 120000
//     },
//     {
//       "id": 700,
//       "no_transaksi": "BS/KRW : PSJK0/0823/000000706",
//       "tanggal_transaksi": "2023-08-10T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122200",
//       "akun_bank_regional_id": "2037",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : BGR - RF - IDR - BCA 2050032097",
//       "balance_bon_sementara": null,
//       "status_bon_sementara": "Need Payment",
//       "tanggal_generate_csv": null,
//       "payment_date": null,
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": null,
//       "no_transaksi_netsuite": null,
//       "alasan_pulling_account_reject": null,
//       "jumlah": 120000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "KRW : PSJK0",
//       "lokasi_id": 1619,
//       "region": "JABODETABEK REGION",
//       "region_id": 2,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": null,
//       "bank_cabang_journal_id": null,
//       "created_date": "2023-08-11T00:44:18.000Z",
//       "area_id": 4,
//       "area_name": "BEKASI-KARAWANG",
//       "no_transaksi_claim": null,
//       "tanggal_transaksi_claim": null,
//       "jumlah_realisasi": null,
//       "aging_bon_sementara": 2
//     },
//     {
//       "id": 699,
//       "no_transaksi": "BS/RWB : KBJR0/0823/000000705",
//       "tanggal_transaksi": "2023-08-10T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122200",
//       "akun_bank_regional_id": "2037",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : BGR - RF - IDR - BCA 2050032097",
//       "balance_bon_sementara": 98999,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-08-10T17:00:00.000Z",
//       "payment_date": "2023-08-10T17:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1040961",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 99000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "RWB : KBJR0",
//       "lokasi_id": 203,
//       "region": "JABODETABEK REGION",
//       "region_id": 2,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9517,
//       "bank_cabang_journal_id": 9518,
//       "created_date": "2023-08-11T00:25:44.000Z",
//       "area_id": 13,
//       "area_name": "JAKARTA 2",
//       "no_transaksi_claim": "RS/RWB : KBJR0/0823/000000001",
//       "tanggal_transaksi_claim": "2023-08-11T00:00:00.000Z",
//       "jumlah_realisasi": 1
//     },
//     {
//       "id": 698,
//       "no_transaksi": "BS/RWB : KBJR0/0823/000000704",
//       "tanggal_transaksi": "2023-08-10T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122200",
//       "akun_bank_regional_id": "2037",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : BGR - RF - IDR - BCA 2050032097",
//       "balance_bon_sementara": null,
//       "status_bon_sementara": "Complete",
//       "tanggal_generate_csv": "2023-08-10T17:00:00.000Z",
//       "payment_date": "2023-08-10T17:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1040960",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 122000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "RWB : KBJR0",
//       "lokasi_id": 203,
//       "region": "JABODETABEK REGION",
//       "region_id": 2,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9515,
//       "bank_cabang_journal_id": 9516,
//       "created_date": "2023-08-11T00:23:53.000Z",
//       "area_id": 13,
//       "area_name": "JAKARTA 2",
//       "no_transaksi_claim": null,
//       "tanggal_transaksi_claim": null,
//       "jumlah_realisasi": null,
//       "aging_bon_sementara": 2
//     },
//     {
//       "id": 697,
//       "no_transaksi": "BS/RWB : KBJR0/0823/000000703",
//       "tanggal_transaksi": "2023-08-10T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122200",
//       "akun_bank_regional_id": "2037",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : BGR - RF - IDR - BCA 2050032097",
//       "balance_bon_sementara": null,
//       "status_bon_sementara": "Complete",
//       "tanggal_generate_csv": "2023-08-10T17:00:00.000Z",
//       "payment_date": "2023-08-10T17:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1040959",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 121000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "RWB : KBJR0",
//       "lokasi_id": 203,
//       "region": "JABODETABEK REGION",
//       "region_id": 2,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9513,
//       "bank_cabang_journal_id": 9514,
//       "created_date": "2023-08-11T00:22:11.000Z",
//       "area_id": 13,
//       "area_name": "JAKARTA 2",
//       "no_transaksi_claim": null,
//       "tanggal_transaksi_claim": null,
//       "jumlah_realisasi": null,
//       "aging_bon_sementara": 2
//     },
//     {
//       "id": 696,
//       "no_transaksi": "BS/RWB : KBJR0/0823/000000702",
//       "tanggal_transaksi": "2023-08-10T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122200",
//       "akun_bank_regional_id": "2037",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : BGR - RF - IDR - BCA 2050032097",
//       "balance_bon_sementara": null,
//       "status_bon_sementara": "Complete",
//       "tanggal_generate_csv": "2023-08-10T17:00:00.000Z",
//       "payment_date": "2023-08-10T17:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1040958",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 23000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "RWB : KBJR0",
//       "lokasi_id": 203,
//       "region": "JABODETABEK REGION",
//       "region_id": 2,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9511,
//       "bank_cabang_journal_id": 9512,
//       "created_date": "2023-08-11T00:18:31.000Z",
//       "area_id": 13,
//       "area_name": "JAKARTA 2",
//       "no_transaksi_claim": null,
//       "tanggal_transaksi_claim": null,
//       "jumlah_realisasi": null,
//       "aging_bon_sementara": 2
//     },
//     {
//       "id": 695,
//       "no_transaksi": "BS/BDG : ANTPK/0723/000000701",
//       "tanggal_transaksi": "2023-07-23T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122300",
//       "akun_bank_regional_id": "2038",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : JABAR - RF - IDR - BCA 2050032101",
//       "balance_bon_sementara": 0,
//       "status_bon_sementara": "Complete",
//       "tanggal_generate_csv": "2023-07-23T17:00:00.000Z",
//       "payment_date": "2023-07-23T17:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1030001",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 130000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "BDG : ANTPK",
//       "lokasi_id": 1887,
//       "region": "JABAR REGION",
//       "region_id": 10,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9453,
//       "bank_cabang_journal_id": 9454,
//       "created_date": "2023-07-24T09:00:33.000Z",
//       "area_id": 1,
//       "area_name": "JABAR",
//       "no_transaksi_claim": null,
//       "tanggal_transaksi_claim": null,
//       "jumlah_realisasi": null,
//       "aging_bon_sementara": 20
//     },
//     {
//       "id": 694,
//       "no_transaksi": "BS/BDG : ANTPK/0723/000000700",
//       "tanggal_transaksi": "2023-07-23T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122300",
//       "akun_bank_regional_id": "2038",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : JABAR - RF - IDR - BCA 2050032101",
//       "balance_bon_sementara": 0,
//       "status_bon_sementara": "Complete",
//       "tanggal_generate_csv": "2023-07-23T17:00:00.000Z",
//       "payment_date": "2023-07-24T00:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1029901",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 120000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "BDG : ANTPK",
//       "lokasi_id": 1887,
//       "region": "JABAR REGION",
//       "region_id": 10,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9451,
//       "bank_cabang_journal_id": 9452,
//       "created_date": "2023-07-24T08:49:32.000Z",
//       "area_id": 1,
//       "area_name": "JABAR",
//       "no_transaksi_claim": null,
//       "tanggal_transaksi_claim": null,
//       "jumlah_realisasi": null,
//       "aging_bon_sementara": 20
//     },
//     {
//       "id": 693,
//       "no_transaksi": "BS/BDG : ANTPK/0723/000000699",
//       "tanggal_transaksi": "2023-07-23T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122300",
//       "akun_bank_regional_id": "2038",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : JABAR - RF - IDR - BCA 2050032101",
//       "balance_bon_sementara": 0,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-07-23T17:00:00.000Z",
//       "payment_date": "2023-07-23T17:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1029801",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 50000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "BDG : ANTPK",
//       "lokasi_id": 1887,
//       "region": "JABAR REGION",
//       "region_id": 10,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9449,
//       "bank_cabang_journal_id": 9450,
//       "created_date": "2023-07-24T06:39:10.000Z",
//       "area_id": 1,
//       "area_name": "JABAR",
//       "no_transaksi_claim": null,
//       "tanggal_transaksi_claim": null,
//       "jumlah_realisasi": null
//     },
//     {
//       "id": 692,
//       "no_transaksi": "BS/HLM/0723/000000698",
//       "tanggal_transaksi": "2023-07-23T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122200",
//       "akun_bank_regional_id": "2037",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : BGR - RF - IDR - BCA 2050032097",
//       "balance_bon_sementara": 0,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-07-23T17:00:00.000Z",
//       "payment_date": "2023-07-24T00:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1029701",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 10000000,
//       "keterangan": "Test Status ",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "HLM",
//       "lokasi_id": 2,
//       "region": "JABODETABEK REGION",
//       "region_id": 2,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9447,
//       "bank_cabang_journal_id": 9448,
//       "created_date": "2023-07-23T23:21:33.000Z",
//       "area_id": 8,
//       "area_name": "JAKARTA 1",
//       "no_transaksi_claim": null,
//       "tanggal_transaksi_claim": null,
//       "jumlah_realisasi": null
//     },
//     {
//       "id": 691,
//       "no_transaksi": "BS/BDG : ANTPK/0723/000000697",
//       "tanggal_transaksi": "2023-07-21T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122300",
//       "akun_bank_regional_id": "2038",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : JABAR - RF - IDR - BCA 2050032101",
//       "balance_bon_sementara": 0,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-07-21T17:00:00.000Z",
//       "payment_date": "2023-07-22T00:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1028904",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 25000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "BDG : ANTPK",
//       "lokasi_id": 1887,
//       "region": "JABAR REGION",
//       "region_id": 10,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9413,
//       "bank_cabang_journal_id": 9414,
//       "created_date": "2023-07-22T02:19:33.000Z",
//       "area_id": 1,
//       "area_name": "JABAR",
//       "no_transaksi_claim": "RS/BDG : ANTPK/0723/000002680",
//       "tanggal_transaksi_claim": "2023-07-22T00:00:00.000Z",
//       "jumlah_realisasi": 30000
//     },
//     {
//       "id": 690,
//       "no_transaksi": "BS/BDG : ANTPK/0723/000000696",
//       "tanggal_transaksi": "2023-07-21T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122300",
//       "akun_bank_regional_id": "2038",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : JABAR - RF - IDR - BCA 2050032101",
//       "balance_bon_sementara": 4000,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-07-21T17:00:00.000Z",
//       "payment_date": "2023-07-22T00:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1028902",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 24000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "BDG : ANTPK",
//       "lokasi_id": 1887,
//       "region": "JABAR REGION",
//       "region_id": 10,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9406,
//       "bank_cabang_journal_id": 9407,
//       "created_date": "2023-07-22T02:16:34.000Z",
//       "area_id": 1,
//       "area_name": "JABAR",
//       "no_transaksi_claim": "RS/BDG : ANTPK/0723/000002679",
//       "tanggal_transaksi_claim": "2023-07-22T00:00:00.000Z",
//       "jumlah_realisasi": 20000
//     },
//     {
//       "id": 689,
//       "no_transaksi": "BS/BDG : ANTPK/0723/000000695",
//       "tanggal_transaksi": "2023-07-21T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122300",
//       "akun_bank_regional_id": "2038",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : JABAR - RF - IDR - BCA 2050032101",
//       "balance_bon_sementara": 0,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-07-21T17:00:00.000Z",
//       "payment_date": "2023-07-22T00:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1028901",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 23000,
//       "keterangan": "ok",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "BDG : ANTPK",
//       "lokasi_id": 1887,
//       "region": "JABAR REGION",
//       "region_id": 10,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 9401,
//       "bank_cabang_journal_id": 9402,
//       "created_date": "2023-07-22T02:13:37.000Z",
//       "area_id": 1,
//       "area_name": "JABAR",
//       "no_transaksi_claim": "RS/BDG : ANTPK/0723/000002678",
//       "tanggal_transaksi_claim": "2023-07-22T00:00:00.000Z",
//       "jumlah_realisasi": 23000
//     },
//     {
//       "id": 688,
//       "no_transaksi": "BS/BDG/0723/000000694",
//       "tanggal_transaksi": "2023-07-20T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122300",
//       "akun_bank_regional_id": "2038",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : JABAR - RF - IDR - BCA 2050032101",
//       "balance_bon_sementara": 0,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-07-20T17:00:00.000Z",
//       "payment_date": "2023-07-21T00:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1028005",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 19000,
//       "keterangan": "210723",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "BDG",
//       "lokasi_id": 107,
//       "region": "JABAR REGION",
//       "region_id": 10,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 8818,
//       "bank_cabang_journal_id": 8819,
//       "created_date": "2023-07-20T20:00:41.000Z",
//       "area_id": 1,
//       "area_name": "JABAR",
//       "no_transaksi_claim": "RS/BDG/0723/000002572",
//       "tanggal_transaksi_claim": "2023-07-21T00:00:00.000Z",
//       "jumlah_realisasi": 25000
//     },
//     {
//       "id": 687,
//       "no_transaksi": "BS/BDG/0723/000000693",
//       "tanggal_transaksi": "2023-07-20T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122300",
//       "akun_bank_regional_id": "2038",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : JABAR - RF - IDR - BCA 2050032101",
//       "balance_bon_sementara": 8000,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-07-20T17:00:00.000Z",
//       "payment_date": "2023-07-21T00:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1028002",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 18000,
//       "keterangan": "210723",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "BDG",
//       "lokasi_id": 107,
//       "region": "JABAR REGION",
//       "region_id": 10,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 8811,
//       "bank_cabang_journal_id": 8812,
//       "created_date": "2023-07-20T19:57:39.000Z",
//       "area_id": 1,
//       "area_name": "JABAR",
//       "no_transaksi_claim": "RS/BDG/0723/000002571",
//       "tanggal_transaksi_claim": "2023-07-21T00:00:00.000Z",
//       "jumlah_realisasi": 10000
//     },
//     {
//       "id": 686,
//       "no_transaksi": "BS/BDG/0723/000000692",
//       "tanggal_transaksi": "2023-07-20T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122300",
//       "akun_bank_regional_id": "2038",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : JABAR - RF - IDR - BCA 2050032101",
//       "balance_bon_sementara": 0,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-07-20T17:00:00.000Z",
//       "payment_date": "2023-07-21T00:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1028001",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 17000,
//       "keterangan": "210723",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "BDG",
//       "lokasi_id": 107,
//       "region": "JABAR REGION",
//       "region_id": 10,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 8806,
//       "bank_cabang_journal_id": 8807,
//       "created_date": "2023-07-20T19:53:56.000Z",
//       "area_id": 1,
//       "area_name": "JABAR",
//       "no_transaksi_claim": "RS/BDG/0723/000002570",
//       "tanggal_transaksi_claim": "2023-07-21T00:00:00.000Z",
//       "jumlah_realisasi": 17000
//     },
//     {
//       "id": 685,
//       "no_transaksi": "BS/AMB/0723/000000691",
//       "tanggal_transaksi": "2023-07-20T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10123100",
//       "akun_bank_regional_id": "2066",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : KAL - SULAM - PAPUA 1 - RF - IDR - BRI 1176.01.000299.30.4",
//       "balance_bon_sementara": 0,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-07-20T17:00:00.000Z",
//       "payment_date": "2023-07-21T00:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1027401",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 15000,
//       "keterangan": "210723",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "AMB",
//       "lokasi_id": 622,
//       "region": "KAL SULAM PAPUA REGION",
//       "region_id": 8,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 8788,
//       "bank_cabang_journal_id": 8789,
//       "created_date": "2023-07-20T19:38:22.000Z",
//       "area_id": 2,
//       "area_name": "KAL-SULAM-PAPUA 1",
//       "no_transaksi_claim": "RS/AMB/0723/000002567",
//       "tanggal_transaksi_claim": "2023-07-21T00:00:00.000Z",
//       "jumlah_realisasi": 20000
//     },
//     {
//       "id": 684,
//       "no_transaksi": "BS/AMB/0723/000000690",
//       "tanggal_transaksi": "2023-07-20T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10123100",
//       "akun_bank_regional_id": "2066",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : KAL - SULAM - PAPUA 1 - RF - IDR - BRI 1176.01.000299.30.4",
//       "balance_bon_sementara": 4000,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-07-20T17:00:00.000Z",
//       "payment_date": "2023-07-21T00:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1027301",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 14000,
//       "keterangan": "210723",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "AMB",
//       "lokasi_id": 622,
//       "region": "KAL SULAM PAPUA REGION",
//       "region_id": 8,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 8781,
//       "bank_cabang_journal_id": 8782,
//       "created_date": "2023-07-20T19:34:56.000Z",
//       "area_id": 2,
//       "area_name": "KAL-SULAM-PAPUA 1",
//       "no_transaksi_claim": "RS/AMB/0723/000002566",
//       "tanggal_transaksi_claim": "2023-07-21T00:00:00.000Z",
//       "jumlah_realisasi": 10000
//     },
//     {
//       "id": 683,
//       "no_transaksi": "BS/AMB/0723/000000689",
//       "tanggal_transaksi": "2023-07-20T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10123100",
//       "akun_bank_regional_id": "2066",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : KAL - SULAM - PAPUA 1 - RF - IDR - BRI 1176.01.000299.30.4",
//       "balance_bon_sementara": 0,
//       "status_bon_sementara": "Realized",
//       "tanggal_generate_csv": "2023-07-20T17:00:00.000Z",
//       "payment_date": "2023-07-21T00:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1027101",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 13000,
//       "keterangan": "210723",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "AMB",
//       "lokasi_id": 622,
//       "region": "KAL SULAM PAPUA REGION",
//       "region_id": 8,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 8776,
//       "bank_cabang_journal_id": 8777,
//       "created_date": "2023-07-20T19:30:32.000Z",
//       "area_id": 2,
//       "area_name": "KAL-SULAM-PAPUA 1",
//       "no_transaksi_claim": "RS/AMB/0723/000002565",
//       "tanggal_transaksi_claim": "2023-07-21T00:00:00.000Z",
//       "jumlah_realisasi": 13000
//     },
//     {
//       "id": 682,
//       "no_transaksi": "BS/RWB : KBJR0/0723/000000688",
//       "tanggal_transaksi": "2023-07-19T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10122200",
//       "akun_bank_regional_id": "2037",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : BGR - RF - IDR - BCA 2050032097",
//       "balance_bon_sementara": null,
//       "status_bon_sementara": "Complete",
//       "tanggal_generate_csv": "2023-07-19T17:00:00.000Z",
//       "payment_date": "2023-07-20T00:00:00.000Z",
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": "Posted",
//       "no_transaksi_netsuite": "1027001",
//       "alasan_pulling_account_reject": null,
//       "jumlah": 35000,
//       "keterangan": "OK",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "RWB : KBJR0",
//       "lokasi_id": 203,
//       "region": "JABODETABEK REGION",
//       "region_id": 2,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": 8774,
//       "bank_cabang_journal_id": 8775,
//       "created_date": "2023-07-20T03:08:26.000Z",
//       "area_id": 13,
//       "area_name": "JAKARTA 2",
//       "no_transaksi_claim": null,
//       "tanggal_transaksi_claim": null,
//       "jumlah_realisasi": null,
//       "aging_bon_sementara": 24
//     },
//     {
//       "id": 681,
//       "no_transaksi": "BS/AMB/0723/000000687",
//       "tanggal_transaksi": "2023-07-13T17:00:00.000Z",
//       "id_pemohon": "62048",
//       "nik_pemohon": "10043468",
//       "nama_pemohon": "Bernadus Onie Destrio Lando - 10043468",
//       "coa_bon_sementara": "10560000",
//       "nama_coa_bon_sementara": "Asset : Advance Payment : Advance Payment - Regional",
//       "coa_bon_sementara_id": 951,
//       "akun_bank_regional": "10123100",
//       "akun_bank_regional_id": "2066",
//       "nama_akun_bank_regional": "Cash & Bank : Cash in Bank : KAL - SULAM - PAPUA 1 - RF - IDR - BRI 1176.01.000299.30.4",
//       "balance_bon_sementara": null,
//       "status_bon_sementara": "Need Payment",
//       "tanggal_generate_csv": "2023-07-13T17:00:00.000Z",
//       "payment_date": null,
//       "no_transaksi_front_end": null,
//       "asal_transaksi": null,
//       "status_integrasi": null,
//       "no_transaksi_netsuite": null,
//       "alasan_pulling_account_reject": null,
//       "jumlah": 90000,
//       "keterangan": "l",
//       "penerima_pembayaran": "10043468",
//       "penerima_pembayaran_id": 62048,
//       "nama_penerima_pembayaran": "Bernadus Onie Destrio Lando - 10043468",
//       "bank_penerima_pembayaran": "BCA",
//       "no_rekening_penerima_pembayaran": "12345673948",
//       "atas_nama_bank_penerima_pembayaran": "B O DESTRIO LANDO",
//       "tipe_transaksi": "Karyawan",
//       "tipe_pembayaran": "Transfer",
//       "subsidiary_id": 1,
//       "subsidiary": "PT Tri Adi Bersama",
//       "lokasi": "AMB",
//       "lokasi_id": 622,
//       "region": "KAL SULAM PAPUA REGION",
//       "region_id": 8,
//       "department": "IT PRODUCT & TECHNOLOGY",
//       "department_id": 2,
//       "first_name_penerima_pembayaran": null,
//       "first_name_atas_nama_penerima_pembayaran": null,
//       "first_name_bank_penerima_pembayaran": null,
//       "first_name_no_penerima_pembayaran": null,
//       "link_to_document": null,
//       "adv_karyawan_journal_id": null,
//       "bank_cabang_journal_id": null,
//       "created_date": "2023-07-14T07:33:48.000Z",
//       "area_id": 2,
//       "area_name": "KAL-SULAM-PAPUA 1",
//       "no_transaksi_claim": null,
//       "tanggal_transaksi_claim": null,
//       "jumlah_realisasi": null,
//       "aging_bon_sementara": 30
//     }
// ];

const DashboardBonSementara:React.FC<{
  roles: string[], 
  rows: any[], 
  countData: number, 
  pagination: Pagination,
  setPagination: (pagination: Pagination) => void,
}> = ({
  roles, 
  rows, 
  countData, 
  pagination,
  setPagination
}) => {
  const [open, setOpen] = useState(false);


  const handlePageChange = (pagination: any) => {
    
    const page = {
      page: pagination.page,
      per_page: pagination.pageSize
    }
    setPagination(page)
  }

  return(
      <div style={{ height: 800, width: 1810 }}>
            <Button onClick={() => setOpen(!open)}> Action </Button>
            {open ? 
              (
                  <Paper style={{ position: "absolute", zIndex: 99 }}>
                      <MenuList>
                          <MenuItem
                              onClick={() => {
                              //   handleUploadRealisasi()
                              }}
                          >
                              Upload Realisasi
                          </MenuItem>
                          {roles.find((role) => {
                          return role === "CREATE_REALISASI";
                          }) ? (
                          <MenuItem
                              onClick={() => {
                              //   openPopup();
                              setOpen(false);
                              }}
                          >
                              Create Realisasi
                          </MenuItem>
                          ) : (
                          ""
                          )}
                          {roles.find((role) => {
                          return role === "UPDATE_REALISASI";
                          }) ? (
                          <MenuItem >
                              Update Realisasi
                          </MenuItem>
                          ) : (
                          ""
                          )}
  
                          {roles.find((role) => {
                          return role === "LIHAT_SEJARAH_APPROVAL_REALISASI";
                          }) ? (
                          <MenuItem>
                              Lihat Sejarah Approval
                          </MenuItem>
                          ) : (
                          ""
                          )}
                          {roles.find((role) => {
                          return role === "APPROVE_TRANSAKSI_REALISASI";
                          }) ? (
                          <MenuItem >
                              Approve Transaksi
                          </MenuItem>
                          ) : (
                          ""
                          )}
                          {roles.find((role) => {
                          return role === "REJECT_TRANSAKSI_REALISASI";
                          }) ? (
                          <MenuItem>
                              Reject Transaksi
                          </MenuItem>
                          ) : (
                          ""
                          )}

                          {roles.find((role) => {
                          return role === "GENERATE_CSV_REALISASI";
                          }) ? (
                          <MenuItem
                              onClick={() => {
                              //   openPopupDownloadCSV();
                              //   handleClose();
                              }}
                          >
                              Buat CSV Bank
                          </MenuItem>
                          ) : (
                          ""
                          )}

                          {roles.find((role) => {
                          return role === "TANDAI_TERBAYAR_PERUSAHAAN_REALISASI";
                          }) ? (
                          <MenuItem >
                              Tandai Terbayar oleh Perusahaan
                          </MenuItem>
                          ) : (
                          ""
                          )}
                          {roles.find((role) => {
                          return role === "TANDAI_TERBAYAR_KARYAWAN_REALISASI";
                          }) ? (
                          
                          <MenuItem >
                              Tandai Terbayar oleh Karyawan
                          </MenuItem>
                          ) : (
                          ""
                          )}
                          {roles.find((role) => {
                          return role === "LIHAT_ATTACHMENT_REALISASI";
                          }) ? (
                          <MenuItem >Lihat Attachment</MenuItem>
                          ) : (
                          ""
                          )}
                      </MenuList>
                  </Paper>
              ) 
              : 
              (
                  ''
              )
          }

          <DataGrid 
              columns={columns}
              rows={rows}
              checkboxSelection
              // rowsPerPageOptions={[10, 25, 50, 100]}
              rowCount={countData}
              pageSizeOptions={[5, 10, 25, 50, 100]}
              pagination
              paginationMode="server"
              initialState={{
                  sorting: {
                    sortModel: [
                      {
                        field: "id",
                        sort: "desc",
                      },
                    ],
                  },
                  pagination: {
                    paginationModel: {
                      pageSize: pagination.per_page,
                    },
                  },
              }}
              onPaginationModelChange={handlePageChange}
              // onPageChange={handlePageChange}
              disableRowSelectionOnClick
          />

      </div>
  )
};

export default DashboardBonSementara;